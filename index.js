// import Header from './Header'
//import MainComponent from './MainComponent'
//import Footer from './Footer'

function Header () {
    return (
        <header>
        <nav className="nav">
        <img src="react_logo.jpg" className="nav-logo" alt="reactlogo" />
        <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </nav>
    </header>  
    )
};

function MainComponent (){
    return (
    <div>
    <h1>Fun Facts about React</h1>
    <ol>
    <li>Was first released in 2013</li>
    <li>Was originally created bt Jordan Walke</li>
    <li>Has well over 100K stars on GitHub</li>
     <li>Is maintained by Facebook</li>
    <li>Powers thousands of enterprise app, including mobile apps</li>
</ol>
</div>
    )
};

function Footer () {
return (
    <footer className="footer">
         <small>&copy; Susan Wangari's development 2022</small>
    </footer>
)
};

//as a custom component
function MyPage (){
    return (
        <div >
            {/* creating an instance of the header */}
            <Header />
            {/* creating an instance of the MainComponent */}
            <MainComponent />
           
            {/* an instance of the footer */}
            <Footer />
         </div>
    )
};


//as a custom component
// function MyPage (){
//     return (
//         <div>
//            <header>
//                 <nav>
//                 <img src="react_logo.jpg" alt="reactlogo" width="80"/>
//                 </nav>
//             </header>
//             <h1>Fun Facts about React</h1>
//             <ol>
//                 <li>Was first released in 2013</li>
//                 <li>Was originally created bt Jordan Walke</li>
//                 <li>Has well over 100K stars on GitHub</li>
//                  <li>Is maintained by Facebook</li>
//                 <li>Powers thousands of enterprise app, including mobile apps</li>
//             </ol>
//             <footer>
//                 <small>&copy; Susan Wangari's development 2022</small>
//                 </footer>
//          </div>
//     )
// };

//as a React element
// const page =(
//     <div>
//         <img src="react_logo.jpg" alt="reactlogo" width="80"/>
//         <h1>Fun Facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created bt Jordan Walke</li>
//             <li>Has well over 100K stars on GitHub</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise app, including mobile apps</li>
//         </ul>
//     </div>
// );

ReactDOM.render(<MyPage />, document.getElementById('root'));