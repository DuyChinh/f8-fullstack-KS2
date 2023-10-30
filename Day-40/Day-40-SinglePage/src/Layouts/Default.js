import "../assets/css/styles.css";

export const DefaultLayout = () => {
    return `
        <header>
            <div class="container">
                <h1><a href="/" data-route>HEADER</a></h1>
            </div>
        </header>
        <main>
            <div class="container">
                <div class="row">
                    <div class="row-left">
                        <h2>Menu</h2>
                        <ul>
                            <li><a href="/" data-route>Trang chủ</a></li>
                            <li><a href="/gioi-thieu" data-route>Giới thiệu</a></li>
                            <li><a href="/san-pham" data-route>Sản phẩm</a></li>
                        </ul>
                    </div>

                    <div class="row-right">
                        {body}
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <div class="container">
                <h1>FOOTER</h1>
            </div>
        </footer>
    `;
}