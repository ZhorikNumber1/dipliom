import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import "./Practice.css";

const labs = [
  {
    title: 'Лабораторная работа №1. Регистр, данные и команды пересылки данных',
    description: 'Изучение регистров общего назначения (РОН) и команд пересылки данных.',
    totalVariants: 4,
    tasks: [
      'Занести число из столбца "Число 1" таблицы 1 и строки, соответствующей заданному варианту, в любой РОН;',
      'Занести число из столбца "Число 2" таблицы 1 и строки, соответствующей заданному варианту, в незанятый РОН;',
      '',
      ''
    ]
  },
  {
    title: 'Лабораторная работа №2. Вторая лабораторная',
    description: 'Описание второй лабораторной',
    totalVariants: 3,
    tasks: [
      'Задание для варианта 1',
      'Задание для варианта 2',
      'Задание для варианта 3'
    ]
  },
  // Добавьте другие лабораторные по аналогии
];

export default class Practice extends PureComponent {
  static propTypes = {}

  state = {
    currentLabIndex: 0,
    selectedVariant: 1
  }

  handleLabChange = (e) => {
    this.setState({
      currentLabIndex: Number(e.target.value),
      selectedVariant: 1
    });
  }

  handleVariantChange = (e) => {
    this.setState({
      selectedVariant: Number(e.target.value)
    });
  }

  render() {
    const { currentLabIndex, selectedVariant } = this.state;
    const currentLab = labs[currentLabIndex];
    const variantOptions = Array.from({ length: currentLab.totalVariants }, (_, i) => i + 1);

    return (
      <div className='div-labs'>
        <div className='lab-header'>
          <div className='lab-title-select'>
            <select value={currentLabIndex} onChange={this.handleLabChange}>
              {labs.map((lab, index) => (
                <option key={index} value={index}>{lab.title}</option>
              ))}
            </select>
          </div>
          <div className='lab-title'>
            {currentLab.title}
          </div>
        </div>
        <div className='lab-description'>
          <strong>Цель работы:</strong> {currentLab.description}
        </div>
        <div className='header-content'>
          <div>
            <label htmlFor="variantSelect">Вариант {selectedVariant}</label>
            <select id="variantSelect" value={selectedVariant} onChange={this.handleVariantChange}>
              {variantOptions.map(variant => (
                <option key={variant} value={variant}>{variant}</option>
              ))}
            </select>
            <button>+</button>
          </div>
        </div>
        <div className='task-list'>
          {currentLab.tasks.map((task, index) => (
            <div key={index} className='task-item'>
              <div>{index + 1}. {task}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
