export interface Question {
    id: string;
    phase: string;
    text: string;
    options: string[];
    correctAnswers: string[];
    type: 'unique' | 'multi' | 'boolean';
}
