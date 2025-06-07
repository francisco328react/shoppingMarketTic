import { Button } from "./Button";

export function Card() {
    return (
        <div className="bg-white p-2 w-60 rounded-2xl">
            <div>
                <img src="assets/produtos/tenis.jpg" alt="Nome dos Produtos" />
            </div>
            <div className="p-3">
                <div className="flex justify-center items-center mb-2">
                    <h3>Name Product</h3>
                </div>
                <div className="flex justify-center items-center">
                    <span>Valor do Product</span>
                </div>
            </div>
            <Button />
        </div>
    )
}