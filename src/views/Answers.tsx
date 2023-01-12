import React from 'react'
import { useExam } from '../context/ExamContext'


function Answers() {
    const { questions } = useExam()
    return (
        <div className='answers'>
            <h1>Answers</h1>

            <div className='answers-list'>
                {questions.map((question: any, index: number) => (
                    <div key={question.questionid} className='answer-item'>
                        <div className='question'>
                            {question.question}
                        </div>

                        <div className='answer'>
                            {question.questionoption.find(
                                (option: any) => option.selected
                            )?.optionvalue}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Answers