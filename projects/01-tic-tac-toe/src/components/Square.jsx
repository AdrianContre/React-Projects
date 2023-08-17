export function Square({children,index,updateBoard}) {

    const clickSquare = () => {
        updateBoard(index)
    }

    return (
        <div className="box" onClick={clickSquare}>
            {children}
        </div>
    )
}