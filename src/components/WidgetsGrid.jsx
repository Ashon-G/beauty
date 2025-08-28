import React from 'react'

const widgets = [
  {
    name: 'Health',
    color: '#F4533E',
    icon: 'https://www.abode.space/_next/image?url=https%3A%2F%2Fabode-avatars-prod.s3.amazonaws.com%2Fwidget-icons%2Fhealth%2FActivity.jpg&w=96&q=75'
  },
  {
    name: 'Todo List',
    color: '#FFB5EF',
    icon: 'https://www.abode.space/_next/image?url=https%3A%2F%2Fabode-avatars-prod.s3.amazonaws.com%2Fwidget-icons%2Ftodo%2FTodo2.jpg&w=96&q=75'
  },
  {
    name: 'Trivia',
    color: '#2F6DF2',
    icon: 'https://www.abode.space/_next/image?url=https%3A%2F%2Fabode-avatars-prod.s3.amazonaws.com%2Fwidget-icons%2Ftrivia%2FTrivia2.jpg&w=96&q=75'
  },
  {
    name: 'Lexico',
    color: '#61D390',
    icon: 'https://www.abode.space/_next/image?url=https%3A%2F%2Fabode-avatars-prod.s3.amazonaws.com%2Fwidget-icons%2Fwordguess%2FLexcio2.jpg&w=96&q=75'
  }
]

function WidgetsGrid() {
  return (
    <section className="styles_container__n1j0m">
      <div className="styles_header__6lA9G">
        <h2 className="__className_8f055a">Available Magnets</h2>
      </div>
      <div className="styles_widgetsGrid__PL0TT">
        {widgets.map((w) => (
          <div key={w.name} className="styles_widget__HnSuq" data-name={w.name}>
            <div className="styles_widgetContent__SG90G">
              <img
                alt={w.name}
                width="44"
                height="44"
                className="styles_icon__9PeF7"
                src={w.icon}
                style={{ color: 'transparent', backgroundColor: w.color }}
              />
              <span
                className="styles_pill__FqpVN __className_9b953d"
                style={{ backgroundColor: w.color }}
              >
                {w.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WidgetsGrid
