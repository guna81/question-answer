import React from 'react'
import { useExam } from '../context/ExamContext'

type Props = {
    currentQuestion: number
}

function QuestionItem({ currentQuestion }: Props) {
    const { questions, handleAnswer } = useExam()

    return (
        <div className='question-item'>
            <div className='question'>
                {questions[currentQuestion].question}
            </div>

            <div className='options'>
                {questions[currentQuestion].questiontype === 'Radio' ? (
                    <div className='radio'>
                        {questions[currentQuestion].questionoption.map((option: any, index: number) => (
                            <div key={option.questionid} className='radio-item'>
                                <input
                                    onChange={e => handleAnswer(questions[currentQuestion].questionid, option.optionid, e.target.value)}
                                    type="radio" name="option" id={option.questionid}
                                    value={option.optionvalue}
                                    checked={option.selected}
                                />
                                <label htmlFor={option.questionid}>{option.optionvalue}</label>
                            </div>
                        ))}
                    </div>
                ) : (questions[currentQuestion].questiontype === 'Checkbox') ? (
                    <div className='checkbox'>
                        {questions[currentQuestion].questionoption.map((option: any, index: number) => (
                            <div key={option.questionid} className='checkbox-item'>
                                <input
                                    onChange={e => handleAnswer(questions[currentQuestion].questionid, option.optionid, e.target.value)}
                                    type="checkbox" name="option" id={option.questionid} />
                                <label htmlFor={option.questionid}>{option.optionvalue}</label>
                            </div>
                        ))}
                    </div>
                ) : (questions[currentQuestion].questiontype === 'Textarea') ? (
                    <div className='textarea'>
                        <textarea
                            onChange={e => handleAnswer(questions[currentQuestion].questionid, questions[currentQuestion].questionoption[0].optionid, e.target.value)}
                            name="option" id="option" cols={30} rows={10}></textarea>
                    </div>
                ) : (questions[currentQuestion].questiontype === 'Date') ? (
                    <div className='date'>
                        <input
                            onChange={e => handleAnswer(questions[currentQuestion].questionid, questions[currentQuestion].questionoption[0].optionid, e, e.target.value)}
                            type="date" name="option" id="option" />
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default QuestionItem