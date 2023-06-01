const fs =require('fs')


//reading files
// fs.readFile('./docs/blogs.txt', (err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data.toString())
//     }
// })

//wrting files
// fs.writeFile('./docs/blogs.txt', 'hello mseera',()=>{
//     console.log('file was written')
// })

fs.writeFile('./docs/blogs2.pdf', 'hello mseera',()=>{
    console.log('file was written')
})

//directories
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log('folder created')
//     })    
// }else{
//     fs.rmdir('./assets', (err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log('folder deleted')
//     })
// }

// //deleting files

// if(fs.existsSync('./docs/blogs2.txt')){
//     fs.unlink('./docs/blogs2.txt', (err)=> {
//         if(err){
//             console.log(err)
//         }
//         console.log('file deleted')
//     })
// }
