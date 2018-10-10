class ListsController < ApplicationController
  def index
    @listall = List.all
  end

  def new 
    @list = List.new
  end

  def show 
    @list = List.find(params[:id])
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
    flash[:success] = "List Deleted"
    redirect_to request.referrer || root_url
  end

  def create
    @list = List.create(list_param)
    if @list.save
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