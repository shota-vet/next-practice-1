export type ServiceItem = {
  image: string;
  title: string;
  description: string;
};

// もしdataがページによって異なってこのコンポーネントを使い回して異なるデータを入れる可能性ある場合はそのページのtsxで入れるのがいい
export const services: ServiceItem[] = [
  {
    image: "/img/service01.jpg",
    title: "Webサイト制作",
    description:
      "新規サイトの制作はもちろんサイトリニューアルやランディングページの制作も可能です。",
  },
  {
    image: "/img/service02.jpg",
    title: "Webサイト運用",
    description:
      "サイトの更新作業や独自のアクセス解析に基づいたサイト改善のご提案をいたします。",
  },
  {
    image: "/img/service03.jpg",
    title: "アプリ開発",
    description:
      "スマートフォンアプリ開発の他、Vue.jsやReactによるWebアプリの開発が可能です。",
  },
];
