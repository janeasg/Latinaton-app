import React, { ReactNode } from 'react';

export interface CardDeTarefasProps {
  // Textos (Strings)
  title: string;
  description?: string;
  assigneeName?: string; // Nome do integrante da equipe responsável
  dueDate?: string; // Prazo (Ex: "Até 18:00h")

  // Booleans
  showIcon?: boolean;
  hasDivider?: boolean;
  isCompleted?: boolean;

  // Slots / Componentes Aninhados
  children?: ReactNode;
  leftActionSlot?: ReactNode; // Espaço para avatar ou tag de área (ex: "Front-end")

  // Variantes do Figma
  priority?: 'low' | 'medium' | 'high';
  status?: 'todo' | 'in_progress' | 'review' | 'done';

  // Callbacks
  onStatusChange?: () => void;
}

const CardDeTarefas: React.FC<CardDeTarefasProps> = ({
  title,
  description,
  assigneeName,
  dueDate,
  showIcon = true,
  hasDivider = false,
  isCompleted = false,
  children,
  leftActionSlot,
  priority = 'medium',
  status = 'todo',
  onStatusChange,
}) => {
  return (
    <>
      <article data-priority={priority} data-status={status}>
        {/* Cabeçalho da Tarefa */}
        <header>
          {showIcon && <span aria-hidden="true">📌</span>}
          <h3>{title}</h3>
        </header>

        {hasDivider && <hr />}

        {/* Detalhes da Tarefa */}
        <section>
          {description && <p>{description}</p>}

          {dueDate && (
            <p>
              <span>Entrega:</span> <time>{dueDate}</time>
            </p>
          )}

          {assigneeName && (
            <p>
              <span>Responsável:</span> <strong>{assigneeName}</strong>
            </p>
          )}

          {/* Slot para tags extras, sub-tarefas ou listas */}
          {children && <div>{children}</div>}
        </section>

        {hasDivider && <hr />}

        {/* Rodapé / Ações de KanBan */}
        <footer>
          {leftActionSlot && <div>{leftActionSlot}</div>}

          <button type="button" onClick={onStatusChange}>
            {isCompleted ? 'Concluída ✅' : 'Mudar Status 🔄'}
          </button>
        </footer>
      </article>
    </>
  );
};

export default CardDeTarefas;
