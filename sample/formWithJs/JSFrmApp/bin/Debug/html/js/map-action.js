﻿'use strict';

//创建和初始化地图函数：
    function initMap(){
      createMap();//创建地图
      setMapEvent();//设置地图事件
      addMapControl();//向地图添加控件
      addMapOverlay();//向地图添加覆盖物
    }
    function createMap(){ 
      map = new BMap.Map("allmap"); 
      map.centerAndZoom(new BMap.Point(104.870896,26.594743),15);
    }
    function setMapEvent(){
      map.enableScrollWheelZoom();
      map.enableKeyboard();
      map.enableDragging();
      map.enableDoubleClickZoom()
    }
    function addClickHandler(target,window){
      target.addEventListener("click",function(){
        target.openInfoWindow(window);
      });
    }
    function addMapOverlay(){
      var markers = [
        {content:"六盘水项目，撒了多久啊了dhl",title:"六盘水项目部",imageOffset: {width:0,height:3},position:{lat:26.597521,lng:104.856164}}
      ];
      for(var index = 0; index < markers.length; index++ ){
        var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
        var marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
          imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
        })});
        var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
        var opts = {
          width: 200,
          title: markers[index].title,
          enableMessage: false
        };
        var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
        marker.setLabel(label);
        addClickHandler(marker,infoWindow);
        map.addOverlay(marker);
      };
      var labels = [
        {position:{lng:104.875567,lat:26.601462},content:"这个是文字标注"}
      ];
      for(var index = 0; index < labels.length; index++){
        var opt = { position: new BMap.Point(labels[index].position.lng,labels[index].position.lat )};
        var label = new BMap.Label(labels[index].content,opt);
        map.addOverlay(label);
      };
      var plOpts = [
        {strokeColor:"#00f",strokeWeight:"6",strokeOpacity:"0.6"}
      ];
      var plPath = [
        [
          new BMap.Point(104.853864,26.598749),
          new BMap.Point(104.848474,26.593128),
          new BMap.Point(104.861553,26.58854),
          new BMap.Point(104.864931,26.587829),
          new BMap.Point(104.868165,26.58686),
          new BMap.Point(104.869458,26.592223),
          new BMap.Point(104.86989,26.593322),
          new BMap.Point(104.860619,26.595841),
          new BMap.Point(104.86141,26.597844),
          new BMap.Point(104.858607,26.598943),
          new BMap.Point(104.856738,26.598038),
          new BMap.Point(104.855373,26.598167),
          new BMap.Point(104.853792,26.598878),
          new BMap.Point(104.853792,26.598878),
          new BMap.Point(104.853792,26.598878),
          new BMap.Point(104.853792,26.598878)
        ],
      ];
      for(var index = 0; index < plOpts.length; index++){
        var polyline = new BMap.Polyline(plPath[index],plOpts[index]);
        map.addOverlay(polyline);
      }
    }
    //向地图添加控件
    function addMapControl(){
      var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
      scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
      map.addControl(scaleControl);
      var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
      map.addControl(navControl);
      var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
      map.addControl(overviewControl);
    }