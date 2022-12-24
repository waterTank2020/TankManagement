package entity;

public class MonthlyFlow {
	String id;
	String name;
	String date;
	String location;
	String flowTemperature;
	String returnTemperature;
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
	public String getFlowTemperature() {
		return flowTemperature;
	}
	public void setFlowTemperature(String flowTemperature) {
		this.flowTemperature = flowTemperature;
	}
	public String getReturnTemperature() {
		return returnTemperature;
	}
	public void setReturnTemperature(String returnTemperature) {
		this.returnTemperature = returnTemperature;
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
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
}
