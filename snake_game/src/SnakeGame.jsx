import React, { useState, useEffect } from "react";
import "./SnakeGame.css";

const BOARD_SIZE = 15;
const INITIAL_SNAKE = [{ x: 7, y: 7 }];
const DIRECTIONS = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};

const SnakeGame = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(randomFood);
  const [direction, setDirection] = useState(DIRECTIONS.ArrowRight);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  function randomFood() {
    return {
      x: Math.floor(Math.random() * BOARD_SIZE),
      y: Math.floor(Math.random() * BOARD_SIZE),
    };
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (DIRECTIONS[event.key]) {
        setDirection(DIRECTIONS[event.key]);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  useEffect(() => {
    if (!isRunning || gameOver) return;
    const interval = setInterval(moveSnake, 200);
    return () => clearInterval(interval);
  }, [snake, isRunning]);

  function moveSnake() {
    const newHead = {
      x: snake[0].x + direction.x,
      y: snake[0].y + direction.y,
    };

    if (
      newHead.x < 0 ||
      newHead.y < 0 ||
      newHead.x >= BOARD_SIZE ||
      newHead.y >= BOARD_SIZE ||
      snake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)
    ) {
      setGameOver(true);
      setIsRunning(false);
      return;
    }

    const newSnake = [newHead, ...snake];
    if (newHead.x === food.x && newHead.y === food.y) {
      setFood(randomFood());
      setScore(score + 1);
    } else {
      newSnake.pop();
    }
    setSnake(newSnake);
  }

  function startGame() {
    setSnake(INITIAL_SNAKE);
    setFood(randomFood());
    setDirection(DIRECTIONS.ArrowRight);
    setGameOver(false);
    setScore(0);
    setIsRunning(true);
  }

  function handleOverlayClick() {
    if (gameOver) {
      startGame();
    }
  }

  return (
    <div className="game-container">
      {gameOver && (
        <div className="game-over-overlay" onClick={handleOverlayClick}>
          <h2>Game Over</h2>
          <button onClick={startGame}>New Game</button>
        </div>
      )}
      <h2>Snake Game</h2>
      <p className="score">Score: {score}</p>
      <div className="controls">
        <button onClick={startGame}>New Game</button>
        <button onClick={() => setIsRunning(!isRunning)}>{isRunning ? "Stop" : "Start"}</button>
      </div>
      <div className="board">
        {[...Array(BOARD_SIZE * BOARD_SIZE)].map((_, index) => {
          const x = index % BOARD_SIZE;
          const y = Math.floor(index / BOARD_SIZE);
          const isSnake = snake.some((segment) => segment.x === x && segment.y === y);
          const isFood = food.x === x && food.y === y;
          return (
            <div key={index} className={`cell ${isSnake ? "snake" : isFood ? "food" : ""}`}>
              {isSnake ? "🐍" : isFood ? "🍎" : ""}
            </div>
          );
        })}
      </div>
      <p className="credit">By Mayank Baliyan</p>
    </div>
  );
};

export default SnakeGame;
