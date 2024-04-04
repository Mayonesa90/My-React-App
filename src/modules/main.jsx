import ProfileCard from "./dynamic-profile";
import MessageFromGrandParent from "./multilevel-props";
import Counter from "./Counter";

export default function Main(){
    return (
       <main className=" grid grid-cols-2 content-top mx-32 my-10 min-h-96 gap-10">
        < ProfileCard />
        < MessageFromGrandParent />
        <Counter />
       </main>
    )
}