import { createContext, useContext, useState } from "react"

const User = createContext({name: "여니", age: 15});
// 만일 provider 컴포넌트가 없을 경우, 이 기본값이 useContext의 나타남

export const Context = ({children}) => {

    const [profile, setProfile] = useState({
        name: "man",
        age: 18,
        change: (newData) => setProfile(newData),
    });

    return (
        <User.Provider value={profile}>{children}</User.Provider>
    )
}


export const Child = () => {
    const profile = useContext(User);

    return (
        <div>
            <h1>{profile.name} / {profile.age}</h1>
            <button onClick={() => profile.change({})}>setProfile</button> 
        </div>
    )
}

// 버튼이 눌렸을때, Provider로 받은 value props의 값이 변경되기에, 리렌더링 됨
// <의문> profile state의 값 자체가 변경되어, provider value마저도 변경되었고, 그렇기에 리렌더링 된건가? 