export function addStartInfoInLocalStorage(){
    if (localStorage.length === 0)
    {
        let contact_array = [{id:1, Name:'Sara', 
                            Messages:[{text:'Hello!', isMy:'true', date:new Date('11.08.2020 10:00:00')},
                                    {text:'O! Hello! How are you?', isMy:'false', date:new Date('11.08.2020 10:03:00')}], 
                            avatar:'/avatars/girl.svg'}, 
                            {id:2, Name:'Маша', Messages:[{text:'Привет', isMy:'false', date:new Date('11.09.2020 11:00:00')}], avatar:'/avatars/girl2.svg'},
                            {id:3, Name:'Даша', Messages:[{text:'Ку-ку', isMy:'true', date:new Date('11.07.2020 22:00:00')}], avatar:'/avatars/girl2.svg'},
                            {id:4, Name:'Петя', Messages:[{text:'Добрый день!', isMy:'false', date:new Date('11.09.2020 13:00:00')}], avatar:'/avatars/boy.svg'},
                            {id:5, Name:'Николя', Messages:[{text:'Приветствую! Уделите минутку?', isMy:'false', date:new Date('11.04.2020 12:30:00')}], avatar:'/avatars/man.svg'},
                            {id:6, Name:'Лиза', Messages:[{text:'Давно не виделись) не хочешь попить кофе?', isMy:'true', date:new Date('11.10.2020 15:02:00')}, {text:'Да, с удовольствием)', isMy:'false', date:new Date('11.10.2020 15:07:00')}], avatar:'/avatars/girl.svg'},
                            {id:7, Name:'Женя', Messages:[{text:'))))', isMy:'false', date:new Date('11.01.2020 15:02:00')} ], avatar:'/avatars/man3.svg'},
                            {id:8, Name:'Саша', Messages:[{text:'Привет! Я немного опоздаю(', isMy:'false', date:new Date('11.01.2020 15:30:00')} ], avatar:'/avatars/boy2.svg'},
                            {id:9, Name:'Леша', Messages:[{text:'Привет! Твой веловипед готов, можешь забирать', isMy:'false', date:new Date('09.15.2020 15:02:00')}, {text:'Привет! О, супер! завтра заскочу к тебе) Огромное спасибо!!!!', isMy:'true', date:new Date('09.15.2020 15:20:00')}], avatar:'/avatars/boy1.svg'},
                            {id:10, Name:'Аня', Messages:[{text:'Есть минутка?', isMy:'true', date:new Date('09.07.2020 22:00:00')}], avatar:'/avatars/girl2.svg'}
                        ];
        localStorage.setItem('contacts', JSON.stringify(contact_array));

        let chats_array = [{id:1, Name:'Sara', Messages:[{text:'Hello!', isMy:'true', date:new Date('11.08.2020 10:00:00')},
        {text:'O! Hello! How are you?', isMy:'false', date:new Date('11.08.2020 10:03:00')}], avatar:'/avatars/girl.svg'}, 
                             {id:2, Name:'Маша', Messages:[{text:'Привет', isMy:'false', date:new Date('11.09.2020 11:00:00')}], avatar:'/avatars/girl2.svg'},
                             {id:3, Name:'Даша', Messages:[{text:'Ку-ку', isMy:'true', date:new Date('11.07.2020 22:00:00')}], avatar:'/avatars/girl2.svg'}];
        localStorage.setItem('chatsList', JSON.stringify(chats_array ));
    }
    
}

export function LoadContacts(){
        return JSON.parse(localStorage.getItem('contacts'));     
}

export function LoadChatsList(){
    let list = JSON.parse(localStorage.getItem('chatsList'));
    return list.sort((a,b) => new Date(b.Messages[b.Messages.length-1].date) - new Date(a.Messages[a.Messages.length-1].date))
}

export function SaveChatsInLocalStorage(chatsArray){
    localStorage.setItem('chatsList', JSON.stringify(chatsArray))
}