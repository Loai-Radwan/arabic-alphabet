
import './Header.css'

export default function Header({handleChange,state}){

    return (
        <header>
        <h1>الحروف العربية</h1>
        <nav>
            <ul>
                <li className={state == 'learn' ? 'active' : ' '} onClick={() => handleChange('learn')} >تعلم</li>
                <li className={state == 'quiz' ? 'active' : ' '} onClick={() => handleChange('quiz')}>أختبار</li>
            </ul>
        </nav>
        </header>
    )
}