

export function Modal({resetGame,winner}) {
    if (winner === null) return null;
    else {
        const winnerText = winner !== false ? `Ganó ${winner}` : "Empate"
        return (
            <section className='winner'>
                <div className='text'>
                    <h2>{winnerText}</h2>
                     <footer>
                        <button className="button" onClick={resetGame}>Empezar de nuevo</button>
                    </footer>
                </div>
            </section>
        )
    }
}
