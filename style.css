/* --- Reset & Variabel CSS --- */
:root {
    --bg-color: #121212;
    --calc-bg: #1e1e1e;
    --display-bg: #262626;
    --text-main: #e0e0e0;
    --text-dim: #858585;
    --accent-cyan: #00bcd4;
    --accent-green: #4caf50;
    --btn-bg: #2d2d2d;
    --btn-hover: #383838;
    --btn-active: #454545;
    --btn-op-bg: #333333;
    --shadow: 0 10px 30px rgba(0,0,0,0.5);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
}

body {
    font-family: 'JetBrains Mono', monospace;
    background-color: var(--bg-color);
    color: var(--text-main);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
}

.calculator {
    background-color: var(--calc-bg);
    width: 100%;
    max-width: 380px;
    border-radius: 24px;
    box-shadow: var(--shadow);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border: 1px solid #333;
}

.display {
    background-color: var(--display-bg);
    padding: 30px 20px;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 140px;
    word-wrap: break-word;
    word-break: break-all;
}

.history {
    color: var(--text-dim);
    font-size: 0.9rem;
    min-height: 1.2em;
    margin-bottom: 8px;
    opacity: 0.8;
}

.current-input {
    color: var(--text-main);
    font-size: 2.2rem;
    font-weight: 700;
    letter-spacing: -1px;
}

.buttons {
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
}

button {
    font-family: 'JetBrains Mono', monospace;
    background-color: var(--btn-bg);
    color: var(--text-main);
    border: none;
    border-radius: 12px;
    font-size: 1.1rem;
    height: 60px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

button:hover {
    background-color: var(--btn-hover);
    transform: translateY(-2px);
}

button:active {
    background-color: var(--btn-active);
    transform: translateY(1px);
}

.btn-sci {
    color: var(--accent-cyan);
    font-size: 0.9rem;
    background-color: var(--btn-op-bg);
    font-weight: bold;
}

.btn-op {
    color: var(--accent-cyan);
    font-weight: bold;
    font-size: 1.3rem;
}

.btn-ac {
    color: #ff5252;
    font-weight: bold;
}

.btn-del {
    color: #ffab40;
}

.btn-eq {
    background-color: var(--accent-cyan);
    color: #121212;
    font-weight: 900;
    font-size: 1.5rem;
    grid-column: span 1;
}

.btn-eq:hover {
    background-color: #00acc1;
}

@media (max-width: 350px) {
    .current-input { font-size: 1.8rem; }
    button { height: 50px; font-size: 1rem; }
}
