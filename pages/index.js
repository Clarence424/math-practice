Page({
    data: {
        list: [
            {
                id: 'form',
                name: '小学一年级',
                open: false,
                pages: [
                  {
                    id:'button',
                    name:'20以内加减法'
                  }
                  , 
                  {
                    id: 'button',
                    name: '20以内连加连减'
                  }, 
                  {
                    id: 'button',
                    name: '50以内加减法'
                  },
                  {
                    id: 'button',
                    name: '50以内连加连减'
                  }
                ]
            }
        ]
    },
    kindToggle: function (e) {
        var id = e.currentTarget.id, list = this.data.list;
        for (var i = 0, len = list.length; i < len; ++i) {
            if (list[i].id == id) {
                list[i].open = !list[i].open
            } else {
                list[i].open = false
            }
        }
        this.setData({
            list: list
        });
    }
});
