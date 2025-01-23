function UserProfile() {
    return (
        <div className="fixed top-0 left-0 bg-[#F2F5F8] h-screen w-screen z-[999]">
            <div
                className="min-h-[112px] max-w-[1224px] mx-auto py-4 flex justify-between items-center ">
                <img className="h-[112px] w-[240px] object-cover" src="/assets/images/logo.png" alt="Medclub Logo" />
                <div className="flex  gap-[30px]">
                    <div className="flex gap-3">
                        <div className="flex gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                                <circle cx="24.5" cy="24.5" r="24.5" fill="#D9D9D9" />
                            </svg>
                            <div>
                                <p className="text-[##2C2C2E] font-medium">Məmmədov Akif</p>
                                <p className="text-[#AEAEB2]">İD:</p>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M7 6.99998H6C5.46957 6.99998 4.96086 7.2107 4.58579 7.58577C4.21071 7.96084 4 8.46955 4 8.99998V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17M16 4.99998L19 7.99998M20.385 6.58499C20.7788 6.19114 21.0001 5.65697 21.0001 5.09998C21.0001 4.543 20.7788 4.00883 20.385 3.61498C19.9912 3.22114 19.457 2.99988 18.9 2.99988C18.343 2.99988 17.8088 3.22114 17.415 3.61498L9 12V15H12L20.385 6.58499Z" stroke="#2C2C2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <button className="bg-[#0D9CD8] px-[32px] py-[12px] text-white rounded-lg">Çıxış et</button>
                </div>
            </div>
            <div className="bg-white min-h-[942px] max-w-[1224px] mx-auto rounded-xl">
                <div>
                    
                </div>
            </div>
        </div>
    )
}
export default UserProfile