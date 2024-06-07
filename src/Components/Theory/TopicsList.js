import React, { useState } from 'react';
import TopicViewer from "./TopicViewer"
import './TopicsList.css';


const topics = [
  {
    title: 'Работа с числами',
    content: `Работа с числами в ассемблере включает выполнение различных арифметических операций, таких как сложение, вычитание, умножение и деление. Эти операции выполняются с использованием специальных машинных инструкций и регистров процессора.
      Основные арифметические операции:
      Сложение (ADD): Команда ADD используется для сложения двух чисел. Она складывает значение операнда с содержимым регистра и сохраняет результат в регистре.
      Вычитание (SUB): Команда SUB используется для вычитания одного числа из другого. Она вычитает значение операнда из содержимого регистра и сохраняет результат в регистре.
      Пример:
      MOV AX, 4  ; Переместить значение 4 в регистр AX
      ADD AX, 3  ; Добавить значение 3 к содержимому регистра AX, в результате AX будет содержать 7
      SUB AX, 1  ; Вычесть 1 из содержимого регистра AX, в результате AX будет содержать 6`
  },
  {
    title: 'Работа процессора',
    content: `В этом разделе мы рассмотрим ключевые компоненты, составляющие внутреннюю архитектуру процессоров, таких как те, что разрабатываются Intel. Эти элементы играют критическую роль в выполнении вычислительных задач и обеспечивают высокую производительность современных компьютеров.

    1. Арифметико-Логическое Устройство (ALU)
       - ALU является центральным компонентом процессора, ответственным за выполнение всех арифметических и логических операций.
       - Основные функции ALU включают сложение, вычитание, умножение, деление, а также выполнение логических операций, таких как AND, OR, XOR и NOT.
       - ALU принимает операнды (входные данные) из регистров, выполняет вычисления и возвращает результат обратно в регистры или в память.`
  },
  {
    title: 'Другой пример темы',
    content: 'Содержание другой темы...'
  }
  // Добавьте сюда другие темы
];

const TopicsList = () => {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextTopic = () => {
    const nextIndex = (currentIndex + 1) % topics.length;
    setCurrentIndex(nextIndex);
    setSelectedTopic(topics[nextIndex]);
  };

  return (
    <div className="topics-container">
      <div className="topic-viewer-container">
        <button className="next-topic-button" onClick={handleNextTopic}>Следующая тема</button>
        <TopicViewer topic={selectedTopic} />
      </div>
      <div className="topics-list">
        {topics.map((topic, index) => (
          <button key={index} onClick={() => {
            setSelectedTopic(topic);
            setCurrentIndex(index);
          }} className="topic-button">
            {topic.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopicsList;
