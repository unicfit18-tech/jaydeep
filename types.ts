
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  event: string;
  text: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface MenuRecommendation {
  appetizers: string[];
  mainCourses: string[];
  desserts: string[];
  beverages: string[];
}
