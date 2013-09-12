**Usage**

+ Rename "AlloyToggle" to "Toggle" and copy to your project's app/widgets/ folder.

+ Add this to your app/config.json dependencies:

```javascript
    "dependencies": {
        "Toggle": "1.0",
	}
```

+ Then in your view:

```xml
<Widget id="box1" src="Toggle" value="true"/>
```

+ And listen from the controller:

```javascript
$.box1.getView().addEventListener('change', function(e){
   alert(e); 
});
```

