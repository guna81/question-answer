import React, { useState, createContext, useContext } from 'react'
import mockData from "../mock-data/questions.json"

type Props = {
    children: React.ReactNode
}

const ExamContext = createContext<any>(null)


export const useExam = () => {
    const context = useContext(ExamContext)
    if (context === undefined) {
        throw new Error('useExam must be used within a ExamProvider')
    }
    return context
}


function ExamProvider({ children }: Props) {
    const [questions, setQuestions] = useState(mockData.questions)

    const handleAnswer = (questionId: number, optionId: number) => {
        console.log(questionId, optionId);

        const newQuestions = questions.map((question) => {
            if (question.questionid === questionId) {
                return {
                    ...question,
                    questionoption: question.questionoption.map((option: any) => {
                        if (option.optionid === optionId) {
                            return {
                                ...option,
                                selected: !option.selected
                                // optionvalue: value
                            }
                        }
                        return option
                    }),
                }
            }
            return question
        })
        setQuestions(newQuestions)
    }


    const value = {
        questions,
        handleAnswer
    }
    return (
        <ExamContext.Provider value={value}>
            {children}
        </ExamContext.Provider>
    )
}

export default ExamProvider