import React, { useEffect, useRef, useState } from "react";
import '../DogGame/Dog.css'

function Dog() {
    const dinoRef = useRef();
    const cactusRef = useRef();
    const [score, setScore] = useState(0);
    const jump = () => {
        if (!!dinoRef.current && !dinoRef.current.classList.contains("jump")) {
            dinoRef.current.classList.add("jump");
            setTimeout(() => {
                dinoRef.current.classList.remove("jump");
            }, 300);
        }
    };

    useEffect(() => {
        const isAlive = setInterval(() => {
            const dinoTop = parseInt(
                getComputedStyle(dinoRef.current).getPropertyValue("top")
            );
            const cactusLeft = parseInt(
                getComputedStyle(cactusRef.current).getPropertyValue("left")
            );
            if (cactusLeft < 40 && cactusLeft > 0 && dinoTop >= 140) {
                alert("Game Over! Your Score : " + score);
                setScore(0);
            } else {
                setScore((prevScore) => prevScore + 1);
            }
        }, 10);

        return () => clearInterval(isAlive);
    }, [score]);

    useEffect(() => {
        document.addEventListener("keydown", jump);
        return () => document.removeEventListener("keydown", jump);
    }, []);

    return (
        <>
            <div className="game" onClick={jump}>
                <div>Score: {score}</div>
                <div id="dino" ref={dinoRef}></div>
                <div id="cactus" ref={cactusRef}></div>
            </div>
        </>
    );
}

export default Dog;
