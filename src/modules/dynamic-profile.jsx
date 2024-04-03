
export default function ProfileCard(namn, titel) {
    return (
        <p className='h-32 border-orange-400 border-r-4 pt-64'>This is a test: {user.title}. {user.name}</p>
    )
}


const user = {
    name: 'Nicodemus Naveltuta',
    age: '47',
    title: 'vice ninja',
    email: 'nicokick@theoffice.net'
}