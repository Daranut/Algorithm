// โจทย์กำหนดให้รับ Input มาหนึ่งตัวเป็น Resursive Data Structure 
// (เป็น data ที่เก็บ data แบบเดียวกันในตัวเอง) ให้ process input ให้ได้ output ในแบบที่โจทย์กำหนด

// แก้โจทย์โดยใช้ recursion

function process(arr, parentLabel = "", result = []) {
    arr.forEach((node) => {
      if (node.children && node.children.length > 0) {
        process(node.children, `${node.id} - ${node.label}`, result);
      }

      const nodeLabel = `${node.id} - ${node.label}`;
  
      result.push(nodeLabel);
    });
  
    return result;
  }
  
  const arr = [
    {
      id: 1,
      label: "Satisfied customers",
      children: [
        {
          id: 2,
          label: "Good food",
          icon: "restaurant_menu",
          children: [
            { id: 3, label: "Quality ingredients" },
            { id: 4, label: "Good recipe" },
          ],
        },
        {
          id: 5,
          label: "Good service",
          icon: "room_service",
          children: [
            { id: 6, label: "Prompt attention" },
            { id: 7, label: "Professional waiter" },
          ],
        },
        {
          id: 8,
          label: "Pleasant surroundings",
          icon: "photo",
          children: [
            {
              id: 9,
              label: "Happy atmosphere (not tickable)",
              tickable: false,
            },
            {
              id: 10,
              label: "Good table presentation (disabled node)",
              disabled: true,
            },
            {
              id: 11,
              label: "Pleasing decor",
            },
          ],
        },
        {
          id: 12,
          label: "Extra information (has no tick)",
          noTick: true,
          icon: "photo",
        },
        {
          id: 13,
          label: 'Forced tick strategy (to "strict" in this case)',
          tickStrategy: "strict",
          icon: "school",
          children: [
            {
              id: 14,
              label: "Happy atmosphere",
            },
            {
              id: 15,
              label: "Good table presentation",
            },
            {
              id: 16,
              label: "Very pleasing decor",
              children: [
                {
                  id: 17,
                  label: "Nice wallpaper",
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  const output = process(arr);
  console.log(output);