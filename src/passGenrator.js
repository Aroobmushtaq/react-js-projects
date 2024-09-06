// import { useState, useCallback, useEffect, useRef } from 'react';

// function PassGenrator() {
//     const [length, setLength] = useState(8);
//     const [chkLength, setChkLength] = useState(false);
//     const [chkCharacter, setChkCharacter] = useState(false);
//     const [pass, setPass] = useState("");
//     const passref=useRef(null)

//     const PasswordGenrator = useCallback(() => {
//         let pss = '';
//         let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//         if (chkLength) string += '0123456789';
//         if (chkCharacter) string += '!@#$%?~`{}()[]/;:+_-*&^';
//         for (let i = 0; i < length; i++) {
//             let char = Math.floor(Math.random() * string.length);
//             pss += string.charAt(char);
//         }
//         setPass(pss);
//     }, [length, chkLength, chkCharacter, setPass]);
//     const copyPasswordToClibboard=useCallback(()=>{
//       passref.current?.select()
//       passref.current?.setSelectionRange(0,100)
//       window.navigator.clipboard.writeText(pass)
//     },[pass])

//     useEffect(() => {
//         PasswordGenrator();
//     }, [length, chkLength, chkCharacter, setPass]);

//     return (
//         <>
//             <div className='w-full max-w-md bg-gray-700 mx-auto shadow-md rounded-lg px-4 my-80 text-white'>
//                 <h1 className='text-center'>Password Generator</h1>
//                 <div className='overflow-hidden rounded-lg flex shadow text-orange-800'>
//                     <input
//                         type='text'
//                         value={pass}
//                         className='outline-none w-full py-1 px-3'
//                         placeholder='Password generated'
//                         readOnly
//                         ref={passref}
//                     />
//                     <button className='outline-none rounded-md bg-slate-600 px-3 shrink-0' onClick={copyPasswordToClibboard}>Copy</button>
//                 </div>
//                 <div className='flex text-sm gap-x-2'>
//                     <div className='flex items-center gap-x-1'>
//                         <input
//                             type='range'
//                             min={6}
//                             max={100}
//                             value={length}
//                             className='cursor-pointer'
//                             onChange={(e) => {
//                                 setLength(Number(e.target.value));
//                             }}
//                         />
//                         <label>Length: {length}</label>
//                     </div>
//                     <div className='flex items-center gap-x-1'>
//                         <input
//                             type='checkbox'
//                             checked={chkLength}
//                             id='numberinput'
//                             onChange={() => {
//                                 setChkLength((prev) => !prev);
//                             }}
//                         />
//                         <label htmlFor='numberinput'>Numbers</label>
//                     </div>
//                     <div className='flex items-center gap-x-1'>
//                         <input
//                             type='checkbox'
//                             checked={chkCharacter}
//                             id='characterinput'
//                             onChange={() => {
//                                 setChkCharacter((prev) => !prev);
//                             }}
//                         />
//                         <label htmlFor='characterinput'>Characters</label>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default PassGenrator;
import { useState, useCallback, useEffect, useRef } from 'react';

function PassGenrator() {
    const [length, setLength] = useState(8);
    const [chkLength, setChkLength] = useState(false);
    const [chkCharacter, setChkCharacter] = useState(false);
    const [pass, setPass] = useState("");
    const passRef = useRef(null);

    const PasswordGenrator = useCallback(() => {
        let pss = '';
        let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        if (chkLength) string += '0123456789';
        if (chkCharacter) string += '!@#$%?~`{}()[]/;:+_-*&^';
        for (let i = 0; i < length; i++) {
            let char = Math.floor(Math.random() * string.length);
            pss += string.charAt(char);
        }
        setPass(pss);
    }, [length, chkLength, chkCharacter, setPass]);

    const copyPasswordToClipboard = useCallback(() => {
        passRef.current?.select();
        passRef.current?.setSelectionRange(0, 100);
        window.navigator.clipboard.writeText(pass);
    }, [pass]);

    useEffect(() => {
        PasswordGenrator();
    }, [length, chkLength, chkCharacter, setPass]);

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <div className='w-full max-w-md bg-white mx-auto shadow-lg rounded-xl px-8 py-6 text-gray-800'>
                <h1 className='text-center text-2xl font-semibold mb-6'>Password Generator</h1>
                <div className='flex items-center justify-between bg-gray-200 rounded-lg mb-4'>
                    <input
                        type='text'
                        value={pass}
                        className='bg-transparent outline-none w-full py-2 px-4 text-lg text-gray-800'
                        placeholder='Generated Password'
                        readOnly
                        ref={passRef}
                    />
                    <button
                        className='bg-blue-600 hover:bg-blue-700 text-white rounded-sm px-4 py-3 transition-colors'
                        onClick={copyPasswordToClipboard}
                    >
                        Copy
                    </button>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center justify-between'>
                        <label className='text-lg'>Length: {length}</label>
                        <input
                            type='range'
                            min={6}
                            max={100}
                            value={length}
                            className='cursor-pointer w-2/3'
                            onChange={(e) => setLength(Number(e.target.value))}
                        />
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <input
                            type='checkbox'
                            checked={chkLength}
                            id='numberinput'
                            className='form-checkbox h-5 w-5 text-blue-600'
                            onChange={() => setChkLength((prev) => !prev)}
                        />
                        <label htmlFor='numberinput' className='text-lg'>Include Numbers</label>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <input
                            type='checkbox'
                            checked={chkCharacter}
                            id='characterinput'
                            className='form-checkbox h-5 w-5 text-blue-600'
                            onChange={() => setChkCharacter((prev) => !prev)}
                        />
                        <label htmlFor='characterinput' className='text-lg'>Include Special Characters</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PassGenrator;

