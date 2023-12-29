import type { PageServerLoad } from "./$types";
import exhibitors from "$lib/json/exhibitor.json";
import laboratories from "$lib/json/laboratory.json";
import lecturers from "$lib/json/lecturer.json";

export const prerender = true;

export const load: PageServerLoad = () => {
  const contents = [
    {
      name: "感性情報デザインコース",
      labs: laboratories
        .filter(({ course }) => course === "kansei")
        .map((laboratory) => ({
          ...laboratory,
          members: exhibitors.filter(({ lab }) => lab === laboratory.id),
        })),
    },
    {
      name: "生活環境デザインコース",
      labs: laboratories
        .filter(({ course }) => course === "seikatu")
        .map((laboratory) => ({
          ...laboratory,
          members: exhibitors.filter(({ lab }) => lab === laboratory.id),
        })),
    },
  ];

  return { contents, lecturers };
};
