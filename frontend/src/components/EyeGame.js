import React, { useState, useEffect } from 'react';

export function EyeGame() {
    const [generatedNumbers, setGeneratedNumbers] = useState([]);
    const [guessedNumbers, setGuessedNumbers] = useState(Array(5).fill(''));
    const [showNumbers, setShowNumbers] = useState(false);
    const [result, setResult] = useState('');

    useEffect(() => {
        generateNumbers();
    }, []);

    useEffect(() => {
        if (showNumbers) {
            const timer = setTimeout(() => {
                setShowNumbers(false);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [showNumbers]);

    useEffect(() => {
        if (result) {
            const timer = setTimeout(() => {
                generateNumbers();
                setShowNumbers(true);
                setResult('');
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [result]);

    const generateNumbers = () => {
        const numbers = [];
        while (numbers.length < 5) {
            const randomNumber = Math.floor(Math.random() * 100);
            if (!numbers.includes(randomNumber)) {
                numbers.push(randomNumber);
            }
        }
        setGeneratedNumbers(numbers);
        setGuessedNumbers(Array(5).fill(''));
        setShowNumbers(true);
        setResult('');
    };

    const handleGuessChange = (index, value) => {
        const updatedGuessedNumbers = [...guessedNumbers];
        updatedGuessedNumbers[index] = value;
        setGuessedNumbers(updatedGuessedNumbers);
    };

    const checkGuess = () => {
        const isCorrect = generatedNumbers.every((number, index) => Number(guessedNumbers[index]) === number);
        setResult(isCorrect ? 'Correct!' : 'Wrong!');
        setShowNumbers(false);
    };

    return (
        <div className='eye-game'>
            <div className="game-container">
            {showNumbers ? (
                <div className="number-container">
                        {generatedNumbers.map((number, index) => (
                            <div key={index} className="number-square">{number}</div>
                        ))}
                    </div>
                ) : (
                    <div className="guess-container">
                        {result ? (
                            <div className="result">{result}</div>
                        ) : (
                            <>
                                {guessedNumbers.map((guess, index) => (
                                    <input
                                        key={index}
                                        type="number"
                                        className='guess-input'
                                        min="0"
                                        max="9"
                                        value={guess}
                                        onChange={(e) => handleGuessChange(index, e.target.value)}
                                    />
                                ))}
                                <button onClick={checkGuess}>Check Guess</button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}