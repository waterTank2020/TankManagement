package entity;

public class MonthlyOutlet {
	String name;
	String date;
	String location;
	String waterSource;
	String hotWaterTemperature;
	String coldWaterTemperature;
	String fault;
	String signature;
	String userId;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getHotWaterTemperature() {
		return hotWaterTemperature;
	}
	public void setHotWaterTemperature(String hotWaterTemperature) {
		this.hotWaterTemperature = hotWaterTemperature;
	}
	public String getColdWaterTemperature() {
		return coldWaterTemperature;
	}
	public void setColdWaterTemperature(String coldWaterTemperature) {
		this.coldWaterTemperature = coldWaterTemperature;
	}
	public String getFault() {
		return fault;
	}
	public void setFault(String fault) {
		this.fault = fault;
	}
	public String getSignature() {
		return signature;
	}
	public void setSignature(String signature) {
		this.signature = signature;
	}
	public String getWaterSource() {
		return waterSource;
	}
	public void setWaterSource(String waterSource) {
		this.waterSource = waterSource;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	
}
