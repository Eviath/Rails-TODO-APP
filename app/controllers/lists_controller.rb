class ListsController < ApplicationController

  def index
    @listall = List.all
  end

  def new
    @list = List.new
  end


  #  List Show
  def show
    @list = List.find(params[:id])
    @task = @list.tasks.new
    @todo = @list.tasks.where(completed: false).order(id: :desc)
    @completed_tasks = @list.tasks.where(completed: true).order(id: :desc)
  end


  # Destroy list
  def destroy
    @list = List.find(params[:id])
    @list.destroy
    redirect_to request.referrer || root_url
    flash[:success] = "List (#{@list.title}) deleted successfully"

  end


  # Create list
  def create
    @list = List.create(list_param)
    if @list.save
      flash[:success] = "List (#{@list.title}) created successfully"
      redirect_to root_path
    else
      render 'new'
    end

  end

  private

  def list_param
    params.require(:list).permit(:title)
  end


end