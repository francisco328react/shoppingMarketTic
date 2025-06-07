import { Input } from "./Input";

export function Header() {
    return(
        <header className="flex fixed justify-center top-0 right-0 w-full py-3 bg-white">
            <div className="mx-auto flex items-center justify-between w-11/12 gap-52">
                <div>
                    <a href="/">
                        <img 
                            src="assets/logo.png"
                            alt="Company Logo"
                            className="max-w-30 rounded-lg"
                        />
                    </a>
                </div>
                <div className="w-4/5">
                    <Input />
                </div>
                <div>Carrinho</div>
            </div>
        </header>
    )
}