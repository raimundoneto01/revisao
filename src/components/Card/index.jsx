export function Card ({nome, email}){
    return(


        <div className="shadow rounded-md bg-white p-3 flex flex-col gap-3">
            <div className="flex items-center gap-2 pb-3 border-b">
                <p className="text-lg font-bold">Nome:</p>
                <p className="text-zinc-800 tracking-widest">{nome}</p>
            </div>
            <div className="flex items-center gap-2 pb-3 border-b">
                <p className="text-lg font-bold">E-mail:</p>
                <p className="text-zinc-800 tracking-widest">{email}</p>
            </div>
            
        </div>
    )
}