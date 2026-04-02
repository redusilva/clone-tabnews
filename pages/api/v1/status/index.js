function status(request, response){
    response.status(200).json({
        message: "Os alunos do curso são demais!"
    })
}

export default status;