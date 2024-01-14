/* eslint-disable react/prop-types */

const Menu = ({ handleCreateFile, handleSaveFile, handleCompileCode }) => {
    return (
        <div className='flex gap-5 p-2 bg-black'>
            <button onClick={handleCreateFile} className='bg-white text-gray-800 px-5 py-2 rounded-lg tracking-[2px] uppercase text-xs'>New File</button>
            <button onClick={handleSaveFile} className='bg-white text-gray-800 px-5 py-2 rounded-lg tracking-[2px] uppercase text-xs'>Save File</button>
            <button onClick={handleCompileCode} className='bg-white text-gray-800 px-5 py-2 rounded-lg tracking-[2px] uppercase text-xs'>Compile Code</button>
        </div>
    )
}

export default Menu