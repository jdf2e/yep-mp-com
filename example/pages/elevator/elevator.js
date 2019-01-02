Page({
    data:{
        elevatorList:[
            {
              title:"A",
              cont:[//可以为空数组
                {
                  name:'American',
                  id:'a1'//id字段可以没有
                },
                {
                  name:'Australian',
                  id:'a2'
                },
                {
                  name:'austrian',
                  id:'a3'
                }
              ]
            },
            {
              title:"B",
              cont:[
                {
                  name:'Brazilian',
                },
                {
                  name:'Brazilian',
                }
              ]
            },
            {
              title:"C",
              cont:[
                {
                  name:'Canadian',
                },
                {
                  name:'Chinese',
                }
              ]
            },
            {
              title:"D",
              cont:[
                {
                  name:'Dutch',
                }
              ]
            },
            {
                title: "E",
                cont: [
                    {
                      name:'English',
                    }
                ]
              },
              {
                title: "F",
                cont: [
                    {
                      name:'Finnish',
                    },
                    {
                      name:'french',
                    }
                ]
              },
              {
                title: "G",
                cont: [
                    {
                      name:'german',
                    }
                ]
              },
              {
                title: "H",
                cont: [
                    {
                      name:'Haiti',
                    },
                    {
                      name:'Honduras',
                    },
                    {
                      name:'Hungary',
                    }
                ]
              },
              {
                title: "I",
                cont: [
                    {
                      name:'Indian',
                    }
                ]
              },
              {
                title: "J",
                cont: [
                    {
                      name:'Japanese',
                    }
                ]
              },
              {
                title: "K",
                cont: [
                    {
                      name:'Kampuchea',
                    },
                    {
                      name:'Kazakstan',
                    }
                ]
              },
              {
                title: "L",
                cont: [
                    {
                      name:'Laos',
                    }
                ]
              },
              {
                title: "M",
                cont: [
                    {
                      name:'Malawi',
                    }
                ]
              },
              {
                title: "N",
                cont: [
                    {
                      name:'Nepal',
                    }
                ]
              },
              {
                title: "O",
                cont: [
                    {
                      name:'Oman',
                    }
                ]
              },
              {
                title: "P",
                cont: [
                    {
                      name:'Pakistan',
                    },
                    {
                      name:'Panama',
                    }
                ]
              },
              {
                title: "Q",
                cont: [
                    {
                      name:'Qatar',
                    }
                ]
              },
              {
                title: "R",
                cont: [
                    {
                      name:'Reunion',
                    }
                ]
              },
              {
                title: "S",
                cont: [
                    {
                      name:'Saint',
                    }
                ]
              },
              {
                title: "T",
                cont: [
                    {
                      name:'Togo',
                    }
                ]
              },
              {
                title: "U",
                cont: [
                    {
                      name:'Uruguay',
                    }
                ]
              },
              {
                title: "V",
                cont: [
                    {
                      name:'Venezuela',
                    },
                    {
                      name:'Vietnam',
                    }
                ]
              },
              {
                title: "W",
                cont: []
              },
              {
                title: "X",
                cont: []
              },
              {
                title: "Y",
                cont: [
                    {
                      name:'Yemen',
                    }
                ]
              },
              {
                title: "Z",
                cont: [
                    {
                      name:'Zambia',
                    },
                    {
                      name:'Zaire',
                    }
                ]
              }
        ]
    },
    onLoad: function(options){


    },
    chooseItem:function(e){
      console.log("chooseItem",e.detail)
    }
})
