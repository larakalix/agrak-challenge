import { RoutesNav } from "@routes/Routes";

function App() {
    return (
        <>
            <main className="bg-gray-50">
                <RoutesNav />
            </main>
            <footer className="text-center py-8">
                <p className="font-semibold text-black">
                    With love by{" "}
                    <a
                        href="https://www.kalixthedev.com/"
                        target="_blank"
                        className="text-black font-bold"
                        rel="noreferrer"
                    >
                        Ivan Lara 👨&zwj;💻
                    </a>
                </p>
            </footer>
        </>
    );
}

export default App;
