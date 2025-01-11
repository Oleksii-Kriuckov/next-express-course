"use client"
import { useState } from "react";

type LessonProps = {
    title: string;
    shortSummary?: string
}

type LikeState = 'Liked' | 'Disliked' | 'Unset'
export default function LessonProps({ title, shortSummary }: LessonProps) {
    const [likeState, setLikeState] = useState<LikeState>('Unset')
    const setLike = () => setLikeState('Liked')
    return (
        <details>
            <summary>
                <span>{title}</span>
            </summary>

            <p>{shortSummary}</p>
            <button onClick={setLike}>
                {likeState == 'Unset' ? 'like' : likeState}
            </button>
        </details>
    )
}