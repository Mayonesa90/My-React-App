import Header from "./header";
import Main from './Main';



export default function Layout() {
    return (
        <div className='  h-screen w-screen content-center'>
            <Header />
            <Main />
            {/* <Footer /> */}
        </div>
    )
}