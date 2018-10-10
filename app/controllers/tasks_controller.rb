class TasksController < ApplicationController
  
    def new
        @task = Task.new(list_id: params[:list_id])
    end

    def create
        @list = List.find(params[:list_id])
        @task = @list.tasks.create(task_param)
        @task.completed = false
        @task.save
        redirect_to list_path(@list)

        respond_to do |format|
            format.html { redirect_to root_path}
            format.js
          end

      end

      def destroy
        @task = Task.find(params[:id])
        @task.destroy
        flash[:success] = "Task Deleted"
        redirect_to request.referrer || root_url
      end


      def update
        @task = Task.find(params[:id])
        if @task.completed
          @task.update(completed: false)
        else
          @task.update(completed: true)
        end
        redirect_to request.referrer || root_url
      end


    private



  def task_param
    params.require(:task).permit(:title)
  end
  

end
