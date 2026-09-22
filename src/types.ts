export type ProjectStatus = 'Planificación' | 'En Progreso' | 'Completado' | 'Pausado';
export type TaskPriority = 'Baja' | 'Media' | 'Alta' | 'Urgente';
export type TaskStatus = 'Pendiente' | 'En Proceso' | 'Completada';

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  progress: number;
  dueDate: string;
  budget: number;
  team: string[];
}

export interface Task {
  id: string;
  projectId: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignee: string;
  dueDate: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  avatar: string;
  activeTasks: number;
}
