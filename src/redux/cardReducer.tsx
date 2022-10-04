import { EDIT_CAR_DATA } from "./types";

export const initialData = {
  carsData: [
    {
      id: 0,
      company: "BMW",
      model: "750i",
      image:
        "https://media.ed.edmunds-media.com/bmw/7-series/2021/oem/2021_bmw_7-series_sedan_745e-xdrive_fq_oem_1_1600.jpg",
      backgroundColor: "red",
    },
    {
      id: 1,
      company: "Lexus",
      model: "LX570",
      image:
        "https://khann.ru/image/catalog/models/lx570-450d-hrs-classic/lx570-450d-hrs-classic-front.jpg",
      backgroundColor: "blue",
    },
    {
      id: 2,
      company: "VAZ",
      model: "2107",
      image:
        "https://img.autoabc.lv/VAZ-2107/VAZ-2107_1982_Sedans_16722104506_3.jpg",
      backgroundColor: "aqua",
    },
    {
      id: 3,
      company: "Satko",
      model: "007",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Interpolitex2016part2-11.jpg",
      backgroundColor: "yellow",
    },
    {
      id: 4,
      company: "Antonov",
      model: "AN-2",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Antonov_AN-2_%28cropped%29.jpg/800px-Antonov_AN-2_%28cropped%29.jpg",
      backgroundColor: "darkviolet",
    },
    {
      id: 5,
      company: "Ural",
      model: "008",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/bc/Ural-4320.jpg",
      backgroundColor: "green",
    },
    {
      id: 5,
      company: "UAZ",
      model: "Combat's Patriot",
      image:
        "https://www.carscoops.com/wp-content/uploads/2020/12/bremach-taos-uaz-patriot-usa-russia-suv-0.jpg",
      backgroundColor: "grey",
    },
  ],
};

export const carsReducer = (state = initialData, action: any) => {
  switch (action.type) {
    case EDIT_CAR_DATA:
      console.log(state.carsData[action.payload.id]);
      const el = state.carsData.find(car => car.id === action.payload.id)
      console.log(state.carsData[action.payload.id].backgroundColor );
  
      return {
        ...state,
        carsData: [...state.carsData, state.carsData[action.payload.id].backgroundColor = action.payload.color]
      }
    default:
      return state;
  }
};

export const changeColorAction = (type:string, id: number, color: string) => {
  return {
    type: type,
    payload: {
      color: color,
      id: id
    }
  }
}