import { FormEvent, ChangeEvent, useState, InvalidEvent } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

interface PostProps {
    author: {
        avatarUrl: string;
        name: string;
        role: string;
    }
    publishedAt: Date;
    content: {
        type: string;
        content: string;
    }[]
}

export function Post({ author, publishedAt, content }: PostProps) {
    const [comments, setComments] = useState<Array<string>>(["Projeto Incrivel!"]);
    const [newCommentText, setNewCommentText] = useState("");

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(e: FormEvent) {
        e.preventDefault();
        setComments(prev => [...prev, newCommentText]);
        setNewCommentText("");
    }

    function handleNewCommentInvalid(e: InvalidEvent<HTMLTextAreaElement>) {
        e.target.setCustomValidity("Esse campo e obrigatorio");
    }

    function handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
        e.target.setCustomValidity("");
        setNewCommentText(e.target.value);
    }

    function deleteComment(comment: string) {
        setComments(prev => prev.filter(item => item !== comment));
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time
                    title={publishedDateFormatted}
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>

                <textarea
                    name="comment"
                    placeholder="Deixe seu comentário"
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button
                        type='submit'
                        disabled={isNewCommentEmpty}
                    >
                        Comentar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => (
                    <Comment
                        key={comment}
                        content={comment}
                        onDeleteComment={deleteComment}
                    />
                ))}
            </div>
        </article>
    )
}