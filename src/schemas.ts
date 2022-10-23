export interface User {
  name: string;
  surname: string;
  email: string;
  active: boolean;
  banned: boolean;
  usersGroup: string;
  points: number;
  id: string;
}

export interface MinifyUser {
  name: string;
  surname: string;
  points: number;
}

export interface CommunityPost {
  user: MinifyUser;
  id: number;
  title: string;
  content: string;
  location: string;
  date: string;
  likesCount: number;
  commentsCount: number;
}

export interface HelpPost {
  user: MinifyUser;
  id: number;
  location: string;
  date: string;
  title: string;
}

export interface ReportPost {
  id: number;
  location: string;
  category: string;
  title: string;
  description: string;
}
