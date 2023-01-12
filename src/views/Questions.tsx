import React, { useState } from 'react'
import { useExam } from '../context/ExamContext'
import QuestionItem from '../components/QuestionItem'
import backIcon from "../icons/back.svg"
import { useNavigate } from 'react-router-dom'


function QuestionSlider() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const { questions } = useExam()
    const navigate = useNavigate()

    const handlePrev = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
        }
    }

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        }
    }

    const handleSubmit = () => {
        console.log(questions);
        navigate('/answers')
    }

    return (
        <div className='question-box'>
            <div className='question-box-top'>
                <div onClick={handlePrev} className='back-btn'>
                    <img src={backIcon} alt="back" />
                </div>
            </div>
            <div className='question-box-body'>
                <QuestionItem currentQuestion={currentQuestion} />
            </div>
            <div className='question-box-bottom'>
                {currentQuestion < questions.length - 1 ? (
                    <button onClick={handleNext}>Next</button>
                ) : (
                    <button onClick={handleSubmit}>Submit</button>
                )}
            </div>
        </div>
    )
}

export default QuestionSlider