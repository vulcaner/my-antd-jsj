import Page1 from  "./page1/Page1";
import Page2 from  "./page2/Page2";
import Page3 from  "./page3/Page3";
const pagesController=[
    {
        id: 1,
        widgetName:'page1',
        pageComponent:Page1,
    },
    {
        id: 2,
        widgetName:'page2',
        pageComponent: Page2,
    },
    {
        id: 3, 
        widgetName:'page3',
        pageComponent:Page3
    },
    {
        id: 4, 
        widgetName:'page4',
        pageComponent:Page1
    },
    {
        id: 5, 
        widgetName:'page5',
        pageComponent:Page2
    },
    {
        id: 6, 
        widgetName:'page6',
        pageComponent:Page3
    },
    {
        id: 7, 
        widgetName:'page7',
        pageComponent:Page1
    },
    {
        id: 8, 
        widgetName:'page8',
        pageComponent:Page2
    }
]
export default pagesController;