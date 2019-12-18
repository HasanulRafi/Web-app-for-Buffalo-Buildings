
function ajaxGetRequest(path, callback) {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
          if (this.readyState===4 && this.status ===200) {
              callback(this.response);
            }
    }
    request.open("GET", path);
    request.send();
}
function bargraph(response){
  let response1 = JSON.parse(response);
  let data = [
    {
      x : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      y : response1,
      type: 'bar'
    }
  ];
  let layout = {
  xaxis: {title: 'month'},
  yaxis: {title: '#permits'},
  title: 'Building permits by month, Buffalo NY'
  };
  Plotly.newPlot('bargraph',data,layout);
}
function linegraph(response){
  let response1 =JSON.parse(response);
  let data=[
    {
      x:['2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019'],
      y:response1,
      mode: 'markers+lines',
      type:'line'
    }
  ];
  let layout = {
    xaxis:{title: 'year'},
    yaxis:{title:'# permits'},
    title:'Building permits by year, Buffalo NY'
  }
  Plotly.newPlot('linegraph',data,layout);
}
function scatterplot(response){
  let response1 = JSON.parse(response)
  let data = [
    {
      x: response1[0],
      y: ['small','medium','large'], 
      mode: 'markers',
      type: 'scatter',
      name: '2008',
      marker: {
        size: 15, 
        } 
     
    },
    {
      x: response1[1],
      y: ['small','medium','large'], 
      mode: 'markers',
      type: 'scatter',
      name: '2009',
      marker: {
        size: 15, 
        }  
    },

    {
      x: response1[2],
      y: ['small','medium','large'], 
      mode: 'markers',
      type: 'scatter',
      name: '2010',
      marker: {
        size: 15, 
        }  
    },
    {
      x: response1[3],
      y: ['small','medium','large'], 
      mode: 'markers',
      type: 'scatter',
      name: '2011',
      marker: {
        size: 15, 
        }  
    },
    {
      x: response1[4],
      y: ['small','medium','large'], 
      mode: 'markers',
      type: 'scatter',
      name: '2012',
      marker: {
        size: 15, 
        }  
    },
    {
      x: response1[5],
      y: ['small','medium','large'], 
      mode: 'markers',
      type: 'scatter',
      name: '2013',
      marker: {
        size: 15, 
        }  
    },
    {
      x: response1[6],
      y: ['small','medium','large'], 
      mode: 'markers',
      type: 'scatter',
      name: '2014',
      marker: {
        size: 15, 
        }  
    },
    {
      x: response1[7],
      y: ['small','medium','large'], 
      mode: 'markers',
      type: 'scatter',
      name: '2015',
      marker: {
        size: 15, 
        }  
    },
    {
      x: response1[8],
      y: ['small','medium','large'], 
      mode: 'markers',
      type: 'scatter',
      name: '2016',
      marker: {
        size: 15, 
        }  
    },
    {
      x: response1[9],
      y: ['small','medium','large'], 
      mode: 'markers',
      type: 'scatter',
      name: '2017',
      marker: {
        size: 15, 
        }  
    },
    {
      x: response1[10],
      y: ['small','medium','large'], 
      mode: 'markers',
      type: 'scatter',
      name: '2018',
      marker: {
        size: 15, 
        }  
    },
    {
      x: response1[11],
      y: ['small','medium','large'], 
      mode: 'markers',
      type: 'scatter',
      name: '2019',
      marker: {
        size: 15, 
        } 
    }  
  ];
  let layout = {
    xaxis:{title:'value',type:'log'},
    yaxis:{title:'size'},
    title: 'value', type: 'log'
    };
  Plotly.newPlot('scatterplot', data, layout);  
}
function xcode(){
  ajaxGetRequest("/bargraph",bargraph);
  ajaxGetRequest("/linegraph",linegraph);
  ajaxGetRequest("/scatterplot",scatterplot);
};
